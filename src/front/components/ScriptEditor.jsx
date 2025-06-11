import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { updateScript } from '../store';


export default function ScriptEditor() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const script = useSelector(state => state.scripts.scripts.find(s => s.id === id));

  if (!script) return <div>Script not found.</div>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateScript({ id, updates: { [name]: value } }));
  };

  return (
    <div className="p-4">
      <input
        name="title"
        value={script.title}
        onChange={handleChange}
        className="text-2xl font-bold w-full mb-2"
      />
      <textarea
        name="body"
        value={script.body}
        onChange={handleChange}
        className="w-full h-[60vh] p-2 border"
        placeholder="Write your script here..."
      />
      <div className="mt-2 text-sm text-gray-500">Status: {script.status}</div>
    </div>
  );
}
