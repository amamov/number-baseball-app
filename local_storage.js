import AsyncStorage from "@react-native-community/async-storage";

export const KEY = "amamov_yoon_sang_seok_is_sexy";

export const set_local_data = (object) => {
  AsyncStorage.setItem(KEY, JSON.stringify(object));
};

const get_local_data = async () => {
  try {
    const loaded_string_data = await AsyncStorage.getItem(KEY);
    if (loaded_string_data) {
      const loaded_object_data = JSON.parse(loaded_string_data);
      return loaded_object_data;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export const loaded_data = get_local_data();

// 리셋
export const clear_local_storage = async () => {
  AsyncStorage.clear();
};

// useEffect(() => {
//   loaded_data._W && dispatch_init_redux_data(loaded_data._W);
// }, [dispatch_init_redux_data]);

// init_redux_data: (state, action) => {
//   return action.payload;
// },
