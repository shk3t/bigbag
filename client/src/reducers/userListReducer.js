import UserService from "../API/UserService";

const LIST_USERS = "LIST_USERS";
const UPDATE_USER = "UPDATE_USER";
const DELETE_USER = "DELETE_USER";

export default function userListReducer(state = { users: [] }, action) {
  switch (action.type) {
    case LIST_USERS:
      return { users: action.payload };
    case UPDATE_USER:
      return {
        users: state.users.map((el) =>
          el.id !== action.payload.id ? el : action.payload.user
        ),
      };
    case DELETE_USER:
      return {
        users: state.users.filter((el) => el.id !== action.payload.id),
      };
    default:
      return state;
  }
}

export const listUsersAction = () => async (dispatch) => {
  const users = await UserService.getAllUsers();
  dispatch({ type: LIST_USERS, payload: users });
};

export const updateUserAction = (id, data) => async (dispatch) => {
  const user = await UserService.updateUser(id, data);
  dispatch({ type: UPDATE_USER, payload: { id, user } });
};

export const deleteUserAction = (id) => async (dispatch) => {
  await UserService.deleteUser(id);
  dispatch({ type: DELETE_USER, payload: { id } });
};

