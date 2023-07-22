import React, { Component } from 'react';
import './UserManage.scss';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import { getAllUsers, addNewUser } from '../../services/userServices';

import ModalUser from './ModalUser';
class UserManage extends Component {

    /** Life cycle
     * Run component:
     * 1. Run construct -> init state
     * 2. Did mount (set state) (chỗ componentDidMount)
     * 3. Render
     */

    constructor(props) { // Hiểu đơn giản thằng property là tài sản, hiểu đơn giản thằng cha sẽ truyền tham số xuống thằng con và thằng con sử dụng chúng (tính kế thừa trong class)
        super(props); // Kế thừa

        this.state = {
            arrayUsers: [],
            isOpenModalUser: false,
        }
    }

    // Thằng này là một biến có sẵn trong thằng Component nên chỉ ghi nhiêu đây
    async componentDidMount() { // (Dùng chỉ để set thuộc tính VD: set hiển thị những người dùng (mặc định) còn xử lý thì không được)
        await this.getAllUsersFromReact();
    }

    getAllUsersFromReact = async () => {
        let response = await getAllUsers('all');

        if (response && response.errCode === 0) {
            this.setState({
                arrayUsers: response.users
            })
        }
    }

    // Thằng này là một biến không có sẵn nên ghi arrow function
    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true
        })
    }

    toggleUserModal = () => {
        let toggle = this.state.isOpenModalUser;

        this.setState({
            isOpenModalUser: !toggle
        })
    }

    createNewUser = async (data) => {
        try {
            let response = await addNewUser(data);
            if (response && response.message.errCode === 0) {
                await this.getAllUsersFromReact(); // Gọi lại thằng này khi tạo thành công
                this.setState({
                    isOpenModalUser: false
                })
            }
            else {
                alert(response.message.message)
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        // Check render
        //console.log('check render ', this.state); // Thì tại đây nếu ta thấy 2 thằng render thì hiểu đơn giản thằng React này lúc load web nó sẽ chạy lần đầu, (mỗi lần setState) thì nó sẽ chạy lại

        let arrayUsers = this.state.arrayUsers;

        return (
            <div className="users-container">
                <ModalUser
                    isOpen={this.state.isOpenModalUser} // Chuyền prop qua cho thằng ModalUser
                    toggle={this.toggleUserModal}
                    className='modal-lg modal-add-new-user'
                    testProp={'Test prop success'}
                    createNewUser={this.createNewUser} // Lúc này thì không nên thêm () do ta truyền thẳng thằng này qua thằng con để xử lý, sau đó thằng con chuyển lại cho chúng ta
                />
                <div className='title'>Manage users with Don Vau</div>
                <button className='btn-add-user' onClick={() => this.handleAddNewUser()}>Add new user</button>
                <div className='table-users'>
                    <table id="customers">
                        <tr>
                            <th>Email</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                        {arrayUsers.map((user, i) => {
                            return (
                                <tr>
                                    <td>{user.email}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.address}</td>
                                    <td>
                                        <button className='edit'><i className="fa-solid fa-pen-to-square"></i></button>
                                        <button className='delete'><i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
