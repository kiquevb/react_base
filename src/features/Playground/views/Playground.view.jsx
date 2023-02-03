import React, { useState } from "react";

import { Button } from "@/components";
import Alert from "@/infrastructure/Alerts";
import Storage from "@/infrastructure/Storage";

const Playground = () => {
  const [storageNewKey, setStorageNewKey] = useState("");

  return (
    <div>
      <h3>Local Storage</h3>

      <Button onClick={() => Alert.info(Storage.getStringify())}>
        Show store content
      </Button>

      <input
        placeholder="new key"
        value={storageNewKey}
        onChange={(e) => setStorageNewKey(e.target.value)}
      />
      <Button
        onClick={() => Alert.info(Storage.setItem(storageNewKey, "test"))}
      >
        Set key
      </Button>

      <Button onClick={() => Alert.info(Storage.emptyStorage())}>
        Empty storage
      </Button>
    </div>
  );
};

export default Playground;
