import { Fragment, useState, FormEvent } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "../../utils/cn";
import axios from "axios";
interface Option {
  id: number;
  name: string;
}
const CascadingDropdowns: React.FC = () => {
  const [textInputValue, setTextInputValue] = useState("");
  const [selectedYearmonth, setSelectedYearmonth] = useState<string>("");
  const [selectedOption1, setSelectedOption1] = useState<string>("");
  const [selectedOption2, setSelectedOption2] = useState<string>("");
  const [selectedOption3, setSelectedOption3] = useState<string>("");
  const [responseData, setResponseData] = useState<any>(null);

  const yearmonth: Option[] = [
    { id: 2, name: "Tahun" },
    { id: 3, name: "Bulan" },
  ];
  const options1: Option[] = [
    { id: 1, name: "Laki-laki" },
    { id: 2, name: "Perempuan" },
  ];

  const options2: { [key: string]: Option[] } = {
    "Laki-laki": [{ id: 1, name: "Suboption 1" }],
    Perempuan: [
      { id: 2, name: "Hamil" },
      { id: 3, name: "Menyusui" },
      { id: 4, name: "Tidak Keduanya" },
    ],
  };

  const options3: { [key: string]: Option[] } = {
    Hamil: [
      { id: 1, name: "Trimester I" },
      { id: 2, name: "Trimester II" },
      { id: 3, name: "Trimester III" },
    ],
    Menyusui: [
      { id: 4, name: "Semester Pertama" },
      { id: 5, name: "Semester Kedua" },
    ],
  };

  const [formData, setFormData] = useState({
    inputText: "",
    yearmonth: "",
    selectedOption1: "",
    selectedOption2: "",
    selectedOption3: "",
  });

  const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      inputText: e.target.value,
    });
  };

  const handleYearmonthChange = (value: string) => {
    setSelectedYearmonth(value);
    setFormData({
      ...formData,
      yearmonth: value,
    });
  };

  const handleDropdown1Change = (value: string) => {
    setSelectedOption1(value);
    setSelectedOption2("");
    setSelectedOption3("");
    setFormData({
      ...formData,
      selectedOption1: value,
      selectedOption2: "",
      selectedOption3: "",
    });
  };

  const handleDropdown2Change = (value: string) => {
    setSelectedOption2(value);
    setSelectedOption3("");
    setFormData({
      ...formData,
      selectedOption2: value,
      selectedOption3: "",
    });
  };

  const handleDropdown3Change = (value: string) => {
    setSelectedOption3(value);
    setFormData({
      ...formData,
      selectedOption3: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://group4-prplh.000webhostapp.com/public/home/find",
        encodeFormData(formData),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log("Response:", response.data);
      // Handle response here
    } catch (error) {
      console.error("Error:", error);
      // Handle error here
    }
  };

  // Function to encode form data as x-www-form-urlencoded
  const encodeFormData = (data: any) => {
    const encodedString = Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
    return encodedString;
  };

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div
      className=" w-full h-auto flex flex-row  items-center rounded-lg p-1 md:p-3  bg-white 
    dark:bg-black z-20 shadow-2xl shadow-blue-300   hover:shadow-blue-400"
      // hidden={}
    >
      <div className="w-[30%] h-full">
        <h2 className="font-bold text-[0.75rem] text-blue-600 dark:text-neutral-200">
          Welcome to Takaran Gizi
        </h2>
        <p className="text-neutral-600 text-[0.5rem] max-w-sm mt-1 dark:text-neutral-300">
          Login to Takaran Gizi if you can because we don&apos;t have a login
          flow yet
        </p>
        <form onSubmit={handleSubmit}>
          <div className="">
            {/* <LabelInputContainer>
              <Label htmlFor="age" className="text-[0.6rem] mt-[5px] mb-[9px]">
                Your Age
              </Label>
              <Input
                id="age"
                placeholder="Your age broo!!"
                type="text"
                value={textInputValue}
                onChange={(e) => setTextInputValue(e.target.value)}
              />
            </LabelInputContainer> */}
            <div>
              <label className="block text-[0.6rem] font-medium leading-6 text-gray-900">
                Age
              </label>
              <div className="relative rounded-md shadow-sm text-[0.6rem]">
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full h-6 rounded-md  text-[0.6rem] border-0 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                  placeholder="required"
                />
                <div className="absolute inset-y-0 right-0 flex items-center text-[0.6rem]">
                  <Listbox
                    value={selectedYearmonth}
                    onChange={handleYearmonthChange}
                  >
                    {({ open }) => (
                      <>
                        <div className="relative  ">
                          <Listbox.Button className="relative w-[6.2vw] cursor-default  rounded-r-md bg-white  pl-3 pr-10 text-left text-gray-900 shadow-sm focus:outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            <span className="ml-3 block truncate text-[0.6rem]">
                              {selectedYearmonth || "Tahun"}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                              <ChevronUpDownIcon
                                className="h-3 w-3 text-gray-400"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Listbox.Options className="absolute z-10  max-h-20 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {yearmonth.map((person) => (
                                <Listbox.Option
                                  key={person.id}
                                  className={({ active }) =>
                                    classNames(
                                      active
                                        ? "bg-indigo-600 text-white text-[0.6rem]"
                                        : "text-gray-900",
                                      "relative cursor-default select-none  pl-3 pr-9"
                                    )
                                  }
                                  value={person.name}
                                >
                                  {({ selected, active }) => (
                                    <>
                                      <div className="flex items-center  text-[0.6rem]">
                                        <span
                                          className={classNames(
                                            selected
                                              ? "font-semibold"
                                              : "font-normal",
                                            "ml-3 block truncate"
                                          )}
                                        >
                                          {person.name}
                                        </span>
                                      </div>

                                      {selected ? (
                                        <span
                                          className={classNames(
                                            active
                                              ? "text-white"
                                              : "text-indigo-600",
                                            "absolute inset-y-0 right-0 flex items-center pr-4"
                                          )}
                                        >
                                          <CheckIcon
                                            className="h-3 w-3"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </div>
                      </>
                    )}
                  </Listbox>
                </div>
              </div>
            </div>
            <Listbox value={selectedOption1} onChange={handleDropdown1Change}>
              {({ open }) => (
                <>
                  <Listbox.Label className="block text-[0.6rem] font-medium leading-6 text-gray-900">
                    Gender
                  </Listbox.Label>
                  <div className="relative  ">
                    <Listbox.Button className="relative w-full cursor-default rounded-md bg-white  pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                      <span className="ml-3 block truncate text-[0.6rem]">
                        {selectedOption1 || "Select"}
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <ChevronUpDownIcon
                          className="h-3 w-3 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10  max-h-20 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {options1.map((person) => (
                          <Listbox.Option
                            key={person.id}
                            className={({ active }) =>
                              classNames(
                                active
                                  ? "bg-indigo-600 text-white text-[0.6rem]"
                                  : "text-gray-900",
                                "relative cursor-default select-none  pl-3 pr-9"
                              )
                            }
                            value={person.name}
                          >
                            {({ selected, active }) => (
                              <>
                                <div className="flex items-center  text-[0.6rem]">
                                  <span
                                    className={classNames(
                                      selected
                                        ? "font-semibold"
                                        : "font-normal",
                                      "ml-3 block truncate"
                                    )}
                                  >
                                    {person.name}
                                  </span>
                                </div>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? "text-white" : "text-indigo-600",
                                      "absolute inset-y-0 right-0 flex items-center pr-4"
                                    )}
                                  >
                                    <CheckIcon
                                      className="h-3 w-3"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
            <Listbox value={selectedOption2} onChange={handleDropdown2Change}>
              {({ open }) => (
                <>
                  <div
                    className="relative mt-[1px] cols-5 "
                    hidden={!selectedOption1 || selectedOption1 === "Laki-laki"}
                  >
                    <Listbox.Label className="block text-[0.6rem] font-medium leading-6 text-gray-900">
                      Condition
                    </Listbox.Label>
                  </div>
                  <div
                    className="relative "
                    hidden={!selectedOption1 || selectedOption1 === "Laki-laki"}
                  >
                    <Listbox.Button className="relative cols-7 w-full cursor-default rounded-md bg-white  pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                      <span className="ml-3 block truncate text-[0.6rem]">
                        {selectedOption2 || "Select"}
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <ChevronUpDownIcon
                          className="h-3 w-3 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 max-h-20 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {options2[selectedOption1]?.map((person) => (
                          <Listbox.Option
                            key={person.id}
                            className={({ active }) =>
                              classNames(
                                active
                                  ? "bg-indigo-600 text-white text-[0.6rem]"
                                  : "text-gray-900",
                                "relative cursor-default select-none  pl-3 pr-9"
                              )
                            }
                            value={person.name}
                          >
                            {({ selected, active }) => (
                              <>
                                <div className="flex items-center  text-[0.6rem]">
                                  <span
                                    className={classNames(
                                      selected
                                        ? "font-semibold"
                                        : "font-normal",
                                      "ml-3 block truncate"
                                    )}
                                  >
                                    {person.name}
                                  </span>
                                </div>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? "text-white" : "text-indigo-600",
                                      "absolute inset-y-0 right-0 flex items-center pr-4"
                                    )}
                                  >
                                    <CheckIcon
                                      className="h-3 w-3"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
            <Listbox value={selectedOption3} onChange={handleDropdown3Change}>
              {({ open }) => (
                <>
                  {" "}
                  <div
                    className="relative mt-[1px] "
                    hidden={
                      !selectedOption2 || selectedOption2 === "Tidak Keduanya"
                    }
                  >
                    <Listbox.Label className="block text-[0.6rem] font-medium leading-6 text-gray-900">
                      Aditional Information
                    </Listbox.Label>
                  </div>
                  <div
                    className="relative mt-[1px] "
                    hidden={
                      !selectedOption2 || selectedOption2 === "Tidak Keduanya"
                    }
                  >
                    <Listbox.Button className="relative w-full  cursor-default rounded-md bg-white  pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                      <span className="ml-3 block truncate text-[0.6rem]">
                        {selectedOption3 || "Select"}
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <ChevronUpDownIcon
                          className="h-3 w-3 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 max-h-20 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {options3[selectedOption2]?.map((person) => (
                          <Listbox.Option
                            key={person.id}
                            className={({ active }) =>
                              classNames(
                                active
                                  ? "bg-indigo-600 text-white text-[0.6rem]"
                                  : "text-gray-900",
                                "relative cursor-default select-none  pl-3 pr-9"
                              )
                            }
                            value={person.name}
                          >
                            {({ selected, active }) => (
                              <>
                                <div className="flex items-center  text-[0.6rem]">
                                  <span
                                    className={classNames(
                                      selected
                                        ? "font-semibold"
                                        : "font-normal",
                                      "ml-3 block truncate"
                                    )}
                                  >
                                    {person.name}
                                  </span>
                                </div>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? "text-white" : "text-indigo-600",
                                      "absolute inset-y-0 right-0 flex items-center pr-4"
                                    )}
                                  >
                                    <CheckIcon
                                      className="h-3 w-3"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
          </div>
          <button
            className="ini-submit mt-4 bg-gradient-to-br text-[0.6rem] h-6 w-full relative group/btn from-blue-700 dark:from-zinc-900 dark:to-zinc-900 to-blue-500 
          dark:bg-zinc-800  text-white rounded-md font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] 
          dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            id="submitButton"
            hidden={
              !selectedOption1 ||
              (selectedOption1 === "Perempuan" &&
                !selectedOption2 &&
                !selectedOption3) ||
              (selectedOption1 === "Perempuan" &&
                selectedOption2 === "Hamil" &&
                !selectedOption3) ||
              (selectedOption1 === "Perempuan" &&
                selectedOption2 === "Menyusui" &&
                !selectedOption3)
            }
          >
            Submit &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>
      <div className="w-[1px] h-[70%] rounded-md mx-3 bg-black"></div>
      <div className="h-full w-[65%] bg-red-600">
        <h1>Ini hasilnya</h1>
        {responseData === null ? (
          <div>Waiting for response...</div>
        ) : (
          <div>
            <h2>Response Data:</h2>
            <h3>Tabel 1:</h3>
            <ul>
              {Object.entries(responseData.data.tabel1).map(([key, value]) => (
                <li key={key}>
                  {key}: {value as String}
                </li>
              ))}
            </ul>
            <h3>Tabel 2:</h3>
            <ul>
              {Object.entries(responseData.data.tabel2).map(([key, value]) => (
                <li key={key}>
                  {key}: {value as String}
                </li>
              ))}
            </ul>
            <h3>Tabel 3:</h3>
            <ul>
              {Object.entries(responseData.data.tabel3).map(([key, value]) => (
                <li key={key}>
                  {key}: {value as String}
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* {responseData && (
          <div>
            <h2>Response Data:</h2>
            <h3>Tabel 1:</h3>
            <ul>
              {Object.entries(responseData.data.tabel1).map(([key, value]) => (
                <li key={key}>
                  {key}: {value as string}
                </li>
              ))}
            </ul>
            <h3>Tabel 2:</h3>
            <ul>
              {Object.entries(responseData.data.tabel2).map(([key, value]) => (
                <li key={key}>
                  {key}: {value as string}
                </li>
              ))}
            </ul>
            <h3>Tabel 3:</h3>
            <ul>
              {Object.entries(responseData.data.tabel3).map(([key, value]) => (
                <li key={key}>
                  {key}: {value as string}
                </li>
              ))}
            </ul>
          </div>
        )} */}
      </div>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-[0.1rem] w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-[0.1rem] w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
      <span className="group-hover/select:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-[0.1rem] w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col w-full", className)}>{children}</div>
  );
};

export { CascadingDropdowns };
