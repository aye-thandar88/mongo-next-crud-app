import { HiOutlineTrash, HiOutlinePencilAlt } from "react-icons/hi";
import Link from "next/link";
import RemoveTopic from "./RemoveTopic";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store", // refresh data for eveytime fetch data
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const TopicList = async () => {
  const { topics } = await getTopics();
  console.log("topics", topics);
  return (
    <>
      {topics?.map((topic, index) => (
        <div
          className="flex my-2 justify-between p-2 border-2 rounded-md bg-slate-300 border-slate-300"
          key={topic._id}
        >
          <div>
            <h1 className="text-lg font-bold">{topic.title}</h1>
            <p>{topic.description}</p>
          </div>

          <div className="flex items-center gap-2">
            <Link href={`/editTopic/${topic._id}`}>
              <HiOutlinePencilAlt size={24} />
            </Link>
            <RemoveTopic id={topic._id} />
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicList;
