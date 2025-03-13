import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { promisify } from "util";

const writeFile = promisify(fs.writeFile);


export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ error: "Fayl topilmadi" }, { status: 400 });
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const uploadDir = path.join(process.cwd(), "public/uploads");

        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        const fileName = `${Date.now()}_${file.name}`;
        const filePath = path.join(uploadDir, fileName);

        await writeFile(filePath, buffer);

        return NextResponse.json({ success: true, filePath: `/uploads/${fileName}` });
    } catch (error) {
        console.error("Fayl yuklashda xatolik:", error);
        return NextResponse.json({ error: "Server xatosi" }, { status: 500 });
    }
}
