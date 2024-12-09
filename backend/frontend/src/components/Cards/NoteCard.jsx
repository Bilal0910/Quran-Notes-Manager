import React from "react";
import { MdOutlinePushPin } from "react-icons/md";
import { MdCreate, MdDelete } from "react-icons/md";

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div className="border rounded-lg p-4 bg-gray-900 hover:shadow-xl transition-all ease-in-out ">
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-sm font-medium">{title}</h6>
          <span className="text-xs text-slate-200">{date}</span>
        </div>

        <MdOutlinePushPin className={`icon-btn ${isPinned ? "text-red-600" : 'text-blue-600'}`} onClick={onPinNote} />
      </div>
      <p className="text-xs text-slate-400 mt-2">{content?.slice(0, 60)}</p>

      <div className="flex items-center justify-between mt-2">
        <div className="text-xs text-slate-300">{tags}</div>

        <div className="flex items-center gap-2">
          <MdCreate
            className="icon-btn hover:text-green-300 cursor-pointer"
            onEdit={onEdit}
          />

          <MdDelete
            className="icon-btn hover:text-red-600 cursor-pointer"
            onDelete={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
