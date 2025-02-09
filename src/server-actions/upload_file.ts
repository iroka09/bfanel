"use server";

import fs from "fs";
import path from "path";

const folder = "/sdcard/UPLOADED_FILES";

export async function upload_file(formData: FormData) {
  // Ensure the folder exists
  console.log(formData)
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }
  const success = [];
  try {
    // Convert formData to an array and process each file asynchronously
    const files: File[] = Array.from(formData.values()) as File[];

    for (const pic of files) {
      try {
        const buffer: Buffer = Buffer.from(await pic.arrayBuffer());
        const filePath = path.join(folder, pic.name);
        fs.writeFileSync(filePath, buffer);
        success.push(true);
      } catch (e) {
        success.push(false);
      }
    }

    return { success: true, upload_count: success.filter(x => x).length };
  } catch (e) {
    console.error("Upload error:", e);
    return { success: false, message: "Unable to upload" };
  }
}