import Badge from "./Badge";

export default function () {
  return (
    <div className="flex flex-col mt-7">
      <h2 className="font-bold text-lg tracking-widest text-white uppercase mb-10">
        Tech stack
      </h2>

      <div className="text-white grid grid-cols-5 gap-5 max-md:grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2">

        <Badge source="images/react.svg" name="React"/>
        <Badge source="images/js.svg" name="Javascript"/>
        <Badge source="images/ts.svg" name="TypeScript"/>
        <Badge source="images/next.svg" name="NextJS"/>
        <Badge source="images/tailwind.svg" name="tailwind"/>
        <Badge source="images/Node.js.svg" name="NodeJs"/>
        <Badge source="images/Express.svg" name="ExpressJS"/>
        <Badge source="images/Firebase.svg" name="Firebase"/>
        <Badge source="images/MongoDB.svg" name="MongoDB"/>
        <Badge source="images/godot.svg" name="Godot"/>        
      </div>
    </div>
  );
}
