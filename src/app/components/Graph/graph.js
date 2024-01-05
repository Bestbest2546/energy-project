import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Day from "./day";

function Recents() {
  return <Day />;
}

function Favorites() {
  return <div>Favorites Content</div>;
}

function Nearby() {
  return <div>Nearby Content</div>;
}

export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);

  // ฟังก์ชันเพื่อเลือกคอมโพเนนต์ที่จะแสดง
  function renderTabContent(value) {
    switch (value) {
      case 0:
        return <Recents />;
      case 1:
        return <Favorites />;
      case 2:
        return <Nearby />;
      default:
        return null;
    }
  }

  return (
    <div className="w-full flex items-center flex-col p-2">
      <div>
        <ButtonGroup
          className="grid grid-cols-3"
          variant="outlined"
          aria-label="outlined button group"
        >
          <Button onClick={() => setValue(0)}>Day</Button>
          <Button onClick={() => setValue(1)}>Month</Button>
          <Button onClick={() => setValue(2)}>Year</Button>
        </ButtonGroup>
      </div>
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 my-3">
        <div>1</div>
        <div>2</div>
      </div>
      {renderTabContent(value)}
    </div>
  );
}
