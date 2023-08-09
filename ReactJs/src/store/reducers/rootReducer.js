// Thằng rootReducer này giống như thằng cha chứa các reducer con như appReducer, userReducer và đảm nhiệm vai trò xuất các Reducer con đó ra

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import appReducer from "./appReducer";
import userReducer from "./userReducer";
import adminReducer from './adminReducer';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistCommonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2,
};

//
const userPersistConfig = {
    ...persistCommonConfig,
    key: 'user',
    whitelist: ['isLoggedIn', 'userInfo']
};

const appPersistConfig = {
    ...persistCommonConfig,
    key: 'app',
    whitelist: ['language'] // Do thằng app nó có list là 'language' nên khi gọi language thì ta sẽ tự động thay đổi language bên trong thằng redux
};

export default (history) => combineReducers({
    router: connectRouter(history),
    user: persistReducer(userPersistConfig, userReducer),
    app: persistReducer(appPersistConfig, appReducer), // Tại đây thì ta muốn nó lưu những gì mà người dùng đã chọn VD: chọn ngôn ngữ là EN sau khi reload lại ngôn ngữ vẫn là EN 
    admin: adminReducer, // Nhưng ở đây ta chỉ muốn nó load lên và không muốn thay đổi gì thì chỉ cần chuyền thằng file vào thôi
})