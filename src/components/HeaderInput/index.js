import { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { useNavigate } from "react-router-dom";

import { api } from "../../services";
import {
  InputContainer,
  SearchContainer,
  SearchDropDown,
  SearchIcon,
  StyledIcon,
  StyledInput,
  List,
  User,
  UserImage,
  UserName
} from "./style";

function UserList({ users, navigateToUser }) {
  if (!users)
    return;

  return (
    <List>
      {
        users.map(u => {
          return (
            <User key={u.name}>
              <UserImage src={u.picture_url} />
              <UserName onClick={() => navigateToUser(u.id)}>
                {u.name}
              </UserName>
            </User>      
          );
        })
      }
    </List>
  );
}

export default function HeaderInput() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState();
  const [users, setUsers] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUsers() {
      if (!searchValue)
        return setSearchOpen(false);

      if (searchValue.length >= 3) {
        try {
          const res = await api.get(`/user/search/${searchValue}`);

          setUsers(res.data);
          setSearchOpen(true);
        } catch (e) {
          alert('Could not search for users');
        };
      }
      else
        setSearchOpen(false);
    };

    fetchUsers();
  }, [searchValue, setSearchOpen]);

  function navigateToUser(id) {
    navigate(`/user/${id}`);
    setSearchValue('');
  }

  return (
    <SearchContainer>
      <InputContainer>
        <DebounceInput
          element={StyledInput}
          placeholder={'Search for people'}
          debounceTimeout={300}
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <SearchIcon>
          <StyledIcon />
        </SearchIcon>
      </InputContainer>
      {
        searchOpen && (
          <SearchDropDown>
            <UserList users={users} navigateToUser={navigateToUser}/>
          </SearchDropDown>
        )
      }
    </SearchContainer>
  );
};