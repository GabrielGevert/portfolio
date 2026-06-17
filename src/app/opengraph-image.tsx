import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-static";

export const alt = "Gabriel Gevert - Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontsDir = join(process.cwd(), "public", "fonts", "satoshi");

export default async function OpengraphImage() {
  const [satoshiRegular, satoshiMedium, satoshiBold] = await Promise.all([
    readFile(join(fontsDir, "Satoshi-Regular.ttf")),
    readFile(join(fontsDir, "Satoshi-Medium.ttf")),
    readFile(join(fontsDir, "Satoshi-Bold.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0E0E17",
          backgroundImage:
            "radial-gradient(circle at 82% 0%, rgba(117,98,224,0.38), transparent 55%), radial-gradient(circle at 0% 100%, rgba(88,71,194,0.28), transparent 50%)",
          fontFamily: "Satoshi",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#9D8DF2",
            fontSize: "30px",
            fontWeight: 500,
            marginBottom: "26px",
          }}
        >
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "9999px",
              background: "linear-gradient(135deg,#9D8DF2,#5847C2)",
              display: "flex",
            }}
          />
          Full Stack Developer
        </div>
        <div
          style={{
            display: "flex",
            color: "#FFFFFF",
            fontSize: "108px",
            fontWeight: 700,
            lineHeight: 1.02,
          }}
        >
          Gabriel Gevert
        </div>
        <div
          style={{
            display: "flex",
            color: "#BDBDBD",
            fontSize: "36px",
            fontWeight: 500,
            marginTop: "26px",
            maxWidth: "940px",
          }}
        >
          Construindo soluções de ponta a ponta, do front-end ao back-end.
        </div>
        <div
          style={{
            display: "flex",
            gap: "14px",
            marginTop: "46px",
            flexWrap: "wrap",
          }}
        >
          {["Next.js", "React", "TypeScript", "Node.js", "AWS", "PostgreSQL"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  fontSize: "26px",
                  fontWeight: 400,
                  color: "#F5F5F5",
                  border: "1px solid rgba(157,141,242,0.45)",
                  borderRadius: "9999px",
                  padding: "8px 22px",
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Satoshi", data: satoshiRegular, weight: 400, style: "normal" },
        { name: "Satoshi", data: satoshiMedium, weight: 500, style: "normal" },
        { name: "Satoshi", data: satoshiBold, weight: 700, style: "normal" },
      ],
    }
  );
}
