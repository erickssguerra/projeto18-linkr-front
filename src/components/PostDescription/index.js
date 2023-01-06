import { ReactTagify } from 'react-tagify';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import {
  EditInput,
  EditForm,
  Description
} from './style';

function submit() {
  return;
}

export default function PostDescription({ data, state }) {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [value, setValue]= useState(data.description);

  const handleKeyUp = (e) => {
    if (e.key === 'Escape')
      state.setEditing(!state.isEditing)
  };

  useEffect(() => {
    if (state.isEditing) {
      inputRef.current.focus();
    }

    setValue(data.description);
  }, [state.isEditing, setValue, data.description]);

  return (
      state.isEditing ?
        <EditForm
          onSubmit={submit}
        >
          <EditInput
            ref={inputRef}
            type='text'
            value={value}
            onKeyUp={(e) => handleKeyUp(e)}
            onChange={(e) => setValue(e.target.value)}
          />
        </EditForm> :
        <Description>
          <ReactTagify
            colors="white"
            tagClicked={(tag) => { navigate(`/hashtag/${tag.replace('#', '')}`) }}
          >
            {data.description}
          </ReactTagify>
        </Description>
    
  );
};