import React, { Component } from 'react';
import './UserManage.scss';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllUsers } from '../../services/userServices';
class UserManage extends Component {

    /** Life cycle
     * Run component:
     * 1. Run construct -> init state
     * 2. Did mount (set state) (chỗ componentDidMount)
     * 3. Render
     */

    constructor(props) {
        super(props);

        this.state = {
            arrayUsers: []
        }
    }

    state = {

    }

    async componentDidMount() {
        let response = await getAllUsers('all');

        if (response && response.errCode === 0) {
            this.setState({
                arrayUsers: response.users
            })
        }

    }

    render() {
        // Check render
        //console.log('check render ', this.state); // Thì tại đây nếu ta thấy 2 thằng render thì hiểu đơn giản thằng React này lúc load web nó sẽ chạy lần đầu, (mỗi lần setState) thì nó sẽ chạy lại

        let arrayUsers = this.state.arrayUsers;

        return (
            <div className="users-container">
                <div className='title'>Manage users with Don Vau</div>
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
