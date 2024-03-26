import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

interface Selection {
  id: number;
  name: string;
}
interface Option {
  id: number;
  name: string;
}
const CascadingDropdowns: React.FC = () => {
  const [selectedOption1, setSelectedOption1] = useState<string>("");
  const [selectedOption2, setSelectedOption2] = useState<string>("");
  const [selectedOption3, setSelectedOption3] = useState<string>("");

  const yearmonth: Selection[] = [
    {
      id: 1,
      name: "Select",
    },
    {
      id: 2,
      name: "Year",
    },
    {
      id: 3,
      name: "Month",
    },
  ];
  // Options for dropdown 1
  const options1: Option[] = [
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
  ];

  // Options for dropdown 2 based on selected option in dropdown 1
  const options2: { [key: string]: Option[] } = {
    Male: [{ id: 1, name: "Suboption 1" }],
    Female: [
      { id: 2, name: "Hamil" },
      { id: 3, name: "Menyusui" },
      { id: 4, name: "Tidak Keduanya" },
    ],
  };

  // Options for dropdown 3 based on selected option in dropdown 2
  const options3: { [key: string]: Option[] } = {
    Hamil: [
      { id: 1, name: "Trimester I" },
      { id: 2, name: "Trimester II" },
      { id: 3, name: "Trimester III" },
    ],
    Menyusui: [
      { id: 4, name: "Tahun Pertama" },
      { id: 5, name: "Tahun Kedua" },
    ],
    // Add more options as needed
  };

  // Handler for dropdown 1 change
  const handleDropdown1Change = (value: string) => {
    setSelectedOption1(value);
    setSelectedOption2(""); // Reset dropdown 2 value
    setSelectedOption3(""); // Reset dropdown 3 value
  };

  // Handler for dropdown 2 change
  const handleDropdown2Change = (value: string) => {
    setSelectedOption2(value);
    setSelectedOption3(""); // Reset dropdown 3 value
  };

  // Handler for dropdown 3 change
  const handleDropdown3Change = (value: string) => {
    setSelectedOption3(value);
  };

  // Handler for form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Handle form submission, you can access the selected values from selectedOption1, selectedOption2, and selectedOption3
    console.log(
      "Selected values:",
      selectedOption1,
      selectedOption2,
      selectedOption3
    );
  };

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="">
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
                                  selected ? "font-semibold" : "font-normal",
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
                className="relative mt-[1px] "
                hidden={!selectedOption1 || selectedOption1 === "Male"}
              >
                <Listbox.Label className="block text-[0.6rem] font-medium leading-6 text-gray-900">
                  Condition
                </Listbox.Label>
              </div>
              <div
                className="relative "
                hidden={!selectedOption1 || selectedOption1 === "Male"}
              >
                <Listbox.Button className="relative w-full cursor-default rounded-md bg-white  pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
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
                                  selected ? "font-semibold" : "font-normal",
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
                                  selected ? "font-semibold" : "font-normal",
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
        <br />
      </div>
      <button
        className="ini-submit bg-gradient-to-br text-[0.6rem] h-6 w-full relative group/btn from-blue-700 dark:from-zinc-900 dark:to-zinc-900 to-blue-500 
          dark:bg-zinc-800  text-white rounded-md font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] 
          dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="submit"
        id="submitButton"
      >
        Submit &rarr;
        <BottomGradient />
      </button>
    </form>
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
export { CascadingDropdowns };
