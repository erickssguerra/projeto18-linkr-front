import { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";

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


function UserList({ users }) {
  if (!users)
    return;

  return (
    <List>
      {
        users.map(u => {
          return (
            <User key={u.name}>
              <UserImage src={u.picture_url} />
              <UserName>
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
            <UserList users={users} />
          </SearchDropDown>
        )
      }
    </SearchContainer>
  );
};