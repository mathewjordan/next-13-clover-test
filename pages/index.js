import dynamic from "next/dynamic";
import Clover from "@samvera/clover-iiif";

// const Clover = dynamic(() => import("@samvera/clover-iiif"), {
//   ssr: false,
// });
export default function Home() {
  const id = "https://manifests.collections.yale.edu/ycba/obj/21168";
  return (
    <div>
      Rendering... {id}...
      <Clover id={id} />
    </div>
  );
}
