# Dialog or Modal Box

A React - TypeScript html5 dialog component.

## Installation

```bash
npm install ts-dialog
```

## Usage

```es6
import { Dialog } from "ts-dialog";
import { useState } from "react";

const MyComponent: React.FC = () => {
  const [openModal, setOpenModal] = useState < boolean > false;
  return (
    <>
      <button onClick={() => setOpenModal(true)}>Open</button>
      <Dialog
        animate="zoomInOut"
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

- **animate** (optional): Specifies the dialog animation (e.g., 'slideFromTop', 'slideFromBottom', 'slideFromLeft','slideFromRight','zoomInOut'). Total 5 animation.
- **backdropColor** (optional): Specifies the backdrop color (e.g., 'black', 'white', 'red', 'blue'). Total 4 color.
- **open** (optional): Enables close and open the dialog.

## Author

- [Monir](https://github.com/bilchalan)

## License

This project is licensed under the MIT License.
