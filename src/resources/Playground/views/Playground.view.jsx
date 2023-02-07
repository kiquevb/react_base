import React from "react";

import { Alert } from "@infra/_exports";
import { Button } from "@components/_exports";

const Playground = () => {
  return (
    <div>
      <Button onClick={() => Alert.info("Test message")}>Toast alert</Button>
    </div>
  );
};

export default Playground;
