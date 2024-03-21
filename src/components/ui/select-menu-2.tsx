import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

interface Option {
  id: number;
  name: string;
}

export const CascadingDropdowns: React.FC = () => {
  const [selectedOption1, setSelectedOption1] = useState<string>("");
  const [selectedOption2, setSelectedOption2] = useState<string>("");
  const [selectedOption3, setSelectedOption3] = useState<string>("");

  // Options for dropdown 1
  const options1: Option[] = [
    { id: 1, name: "Option 1" },
    { id: 2, name: "Option 2" },
    { id: 3, name: "Option 3" },
  ];

  // Options for dropdown 2 based on selected option in dropdown 1
  const options2: { [key: string]: Option[] } = {
    "Option 1": [
      { id: 1, name: "Suboption 1" },
      { id: 2, name: "Suboption 2" },
      { id: 3, name: "Suboption 3" },
    ],
    "Option 2": [
      { id: 4, name: "Suboption 4" },
      { id: 5, name: "Suboption 5" },
      { id: 6, name: "Suboption 6" },
    ],
    "Option 3": [
      { id: 7, name: "Suboption 7" },
      { id: 8, name: "Suboption 8" },
      { id: 9, name: "Suboption 9" },
    ],
  };

  // Options for dropdown 3 based on selected option in dropdown 2
  const options3: { [key: string]: Option[] } = {
    "Suboption 1": [
      { id: 1, name: "Value 1" },
      { id: 2, name: "Value 2" },
      { id: 3, name: "Value 3" },
    ],
    "Suboption 2": [
      { id: 4, name: "Value 4" },
      { id: 5, name: "Value 5" },
      { id: 6, name: "Value 6" },
    ],
    "Suboption 3": [
      { id: 7, name: "Value 7" },
      { id: 8, name: "Value 8" },
      { id: 9, name: "Value 9" },
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

  return (
    <div>
      <Listbox value={selectedOption1} onChange={handleDropdown1Change}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-[0.6rem] font-medium leading-6 text-gray-900">
              Year/Month
            </Listbox.Label>
            <Listbox.Button className="relative w-full  cursor-default rounded-md bg-white  pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="ml-3 block truncate text-[0.6rem]">
                {selectedOption1 || "Select"}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="w-3 h-3 text-gray-400"
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
                {options1.map((option) => (
                  <Listbox.Option key={option.id} value={option.name}>
                    {({ active }) => (
                      <div
                        className={`${
                          active
                            ? "text-white bg-indigo-600"
                            : "text-gray-900 text-[0.6rem]"
                        } relative cursor-default select-none  pl-3 pr-9`}
                      >
                        {option.name}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </>
        )}
      </Listbox>
      <br />

      <label htmlFor="dropdown2">Dropdown 2:</label>
      <Listbox value={selectedOption2} onChange={handleDropdown2Change}>
        {({ open }) => (
          <>
            <Listbox.Button>
              <span>{selectedOption2 || "Select"}</span>
              <ChevronUpDownIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </Listbox.Button>
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options>
                {options2[selectedOption1]?.map((option) => (
                  <Listbox.Option key={option.id} value={option.name}>
                    {({ active }) => (
                      <div
                        className={`${
                          active ? "text-white bg-indigo-600" : "text-gray-900"
                        } cursor-default select-none relative py-2 pl-10 pr-4`}
                      >
                        {option.name}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </>
        )}
      </Listbox>
      <br />

      <label htmlFor="dropdown3">Dropdown 3:</label>
      <Listbox value={selectedOption3} onChange={handleDropdown3Change}>
        {({ open }) => (
          <>
            <Listbox.Button>
              <span>{selectedOption3 || "Select"}</span>
              <ChevronUpDownIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </Listbox.Button>
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options>
                {options3[selectedOption2]?.map((option) => (
                  <Listbox.Option key={option.id} value={option.name}>
                    {({ active }) => (
                      <div
                        className={`${
                          active ? "text-white bg-indigo-600" : "text-gray-900"
                        } cursor-default select-none relative py-2 pl-10 pr-4`}
                      >
                        {option.name}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </>
        )}
      </Listbox>
    </div>
  );
};
