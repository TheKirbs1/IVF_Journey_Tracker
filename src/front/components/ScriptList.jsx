import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addScript } from "../store";

import { Link } from 'react-router-dom';

export default function ScriptList() {
  const scripts = useSelector(state => state.scripts.scripts);
  const dispatch = useDispatch();

  const handleCreate = () => {
    dispatch(addScript());
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Scripts</h1>
      <button onClick={handleCreate} className="mb-4 px-4 py-2 bg-blue-600 text-white rounded">
        New Script
      </button>
      <ul>
        {scripts.map(script => (
          <li key={script.id} className="mb-2">
            <Link to={`/scripts/${script.id}`} className="text-blue-500 underline">
              {script.title || 'Untitled'}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
