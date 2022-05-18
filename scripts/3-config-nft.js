import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x3A22484642102169B719EDCEA21006DD2C59580b");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Beanbag",
        description: "This NFT will give you access to BeanDAO!",
        image: readFileSync("scripts/assets/beanbag.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();