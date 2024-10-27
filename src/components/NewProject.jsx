import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enterdTitle = title.current.value;
    const enterdDescription = description.current.value;
    const enterdDueDate = dueDate.current.value;

    if (!enterdDescription || !enterdDueDate || enterdTitle) {
      alert("please enter the whole inputs");

      // 입력 필드 초기화
      title = "";
      description.current.value = "";
      dueDate.current.value = "";

      return;
    }
    onAdd({
      title: enterdTitle,
      description: enterdDescription,
      dueDate: enterdDueDate,
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} label="Title" />
        <Input ref={description} label="Description" isTextarea />
        <Input type="date" ref={dueDate} label="Due Date" />
      </div>
    </div>
  );
}