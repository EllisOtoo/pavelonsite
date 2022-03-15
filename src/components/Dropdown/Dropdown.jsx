import react, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import menuItemIcon from "../../assets/cubes.png";
import { useAlert } from "react-alert";
import { useEffect } from "react";
import { useRef } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ Options, MenuItems }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex">
          {Options}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {MenuItems.map((menuItem) => (
              <MenuItem menuItem={menuItem} />
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

const MenuItem = ({ menuItem }) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <Link
          to="#"
          className={classNames(
            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
            "block px-4 py-2 text-sm"
          )}
        >
          <div className="flex">
            {/* <img width={25} src={menuItemIcon} alt="" /> */}
            <p className="mx-2"> {` ${menuItem}`}</p>
          </div>
        </Link>
      )}
    </Menu.Item>
  );
};