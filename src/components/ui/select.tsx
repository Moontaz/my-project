import * as React from "react";
import { motion } from "framer-motion";
import Select, { Props as SelectProps } from "react-select";

const CustomSelect = React.forwardRef<Select<any, false>, SelectProps<any>>(
  ({ className, ...props }, ref) => {
    const radius = 100; // Change this to increase the radius of the hover effect
    const [visible, setVisible] = React.useState(false);

    let mouseX = 0;
    let mouseY = 0;

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
      const { currentTarget, clientX, clientY } = event;
      const { left, top } = currentTarget.getBoundingClientRect();

      mouseX = clientX - left;
      mouseY = clientY - top;
    }

    return (
      <motion.div
        style={{
          background: `radial-gradient(${
            visible ? radius + "px" : "0px"
          } circle at ${mouseX}px ${mouseY}px, var(--blue-500), transparent 80%)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-lg transition duration-300 group/input"
      >
        <Select
          className={`flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400 ${className}`}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);
CustomSelect.displayName = "CustomSelect";

export default CustomSelect;
