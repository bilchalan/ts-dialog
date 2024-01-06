# Dialog or Modal Box

A React - TypeScript html5 dialog component.

## Installation

```bash
npm install ts-dialog
```

## Usage

```bash
import { Dialog } from "ts-dialog";
import { useState } from "react";

const MyComponent: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setOpenModal(true)}>Open</button>
      <Dialog
        animate="zoomInOut"
        animationTime={7}
        closeOnClickOutside={false}
        backdropColor="black"
        className="p-16"
        style={{ padding: "4rem" }}
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <div>
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>consectetur adipisicing elit. Reiciendis nihil</p>
        </div>
        <button onClick={() => setOpenModal(false)}>Close</button>
      </Dialog>
    </>
  );
};
```

## Props

- **animate** (optional): Specifies the dialog animation (e.g., 'slideFromTop', 'slideFromBottom', 'slideFromLeft','slideFromRight' & 'zoomInOut'). Values are string.
- **animationTime** (optional): Specifies animation time.(e.g.- 3, 5, 7 & 9). Values are number.
- **backdropColor** (optional): Specifies the backdrop color (e.g., 'black', 'white', 'red', 'blue' & 'transparent'). Values are string. (Mozilla firefox & Safari do not support backdrop animations.)
- **closeOnClickOutside** (optional): Enables whether dialog will close on click outside. Boolean value.
- **open** (optional): Enables close and open the dialog. Boolean value.

## Author

- [Monir](https://github.com/bilchalan)

## License

This project is licensed under the MIT License.
