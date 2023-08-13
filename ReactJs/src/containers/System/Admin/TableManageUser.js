import React, { Component } from 'react';
import './TableManageUser.scss';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import { toast } from 'react-toastify';

// scss
import './TableManageUser.scss'

class TableManageUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.props.getUserStart('all');
    }

    componentDidUpdate(prevProps) {
        let usersRedux = this.props.usersRedux;
        if (prevProps.usersRedux !== usersRedux) {
            this.setState({
                users: usersRedux
            })
        }
    }

    handleDeleteUser = async (idUser) => {
        try {
            await this.props.deleteUserStart(idUser);
            await this.props.getUserStart('all');
            toast.success('✅ Delete success!');
        } catch (e) {
            console.log(e);
        }
    }

    postDataUser = (dataUser) => {
        this.props.dataEditUser(dataUser);
    }

    render() {
        let { users } = this.state;
        return (
            <div className='table-manage-redux' >
                <table>
                    <thead>
                        <tr>
                            <th><FormattedMessage id='manage_user.crud_user_redux.email' /></th>
                            <th><FormattedMessage id='manage_user.crud_user_redux.last_name' /></th>
                            <th><FormattedMessage id='manage_user.crud_user_redux.first_name' /></th>
                            <th><FormattedMessage id='manage_user.crud_user_redux.address' /></th>
                            <th><FormattedMessage id='manage_user.crud_user_redux.actions' /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.email}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.address}</td>
                                    <td>
                                        <button className='edit' onClick={() => this.postDataUser(user)} ><i className="fa-solid fa-pen-to-square"></i></button>
                                        <button className='delete' onClick={() => this.handleDeleteUser(user.id)}><i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        usersRedux: state.admin.users,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getUserStart: (id) => dispatch(actions.getUserStart(id)),
        deleteUserStart: (id) => dispatch(actions.deleteUserStart(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);