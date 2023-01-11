import { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers";

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
  UserName,
  IsFollowing,
  UserEmpty,
} from "./style";

function UserList({ users, navigateToUser }) {
  if (!users) return;

  if (users.length === 0) {
    return (
      <List>
        <UserEmpty>
          <UserName>No user was found</UserName>
        </UserEmpty>
      </List>
    );
  }

  return (
    <List>
      {users.map((u, id) => {
        return (
          <User key={id} onClick={() => navigateToUser(u.id)}>
            <UserImage src={u.picture_url} />
            <UserName>{u.name}</UserName>
            {u.is_following && <IsFollowing>• following</IsFollowing>}
          </User>
        );
      })}
    </List>
  );
}

export default function HeaderInput() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState();
  const [users, setUsers] = useState();
  const { userAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUsers() {
      if (!searchValue || searchValue.length < 3) return setSearchOpen(false);

      try {
        const res = await api.get(`/user/search/${searchValue}`, {
          headers: { Authorization: `Bearer ${userAuth.token}` },
        });

        setUsers(res.data);
        setSearchOpen(true);
      } catch (e) {
        alert("Could not search for users");
      }
    }

    fetchUsers();
  }, [searchValue, setSearchOpen]);

  function navigateToUser(id) {
    navigate(`/user/${id}`);
    setSearchValue("");
  }

  return (
    <SearchContainer>
      <InputContainer>
        <DebounceInput
          element={StyledInput}
          placeholder={"Search for people"}
          debounceTimeout={300}
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <SearchIcon>
          <StyledIcon />
        </SearchIcon>
      </InputContainer>
      {searchOpen && (
        <SearchDropDown>
          <UserList users={users} navigateToUser={navigateToUser} />
        </SearchDropDown>
      )}
    </SearchContainer>
  );
}
