import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ProductManage extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        })
    }

    componentDidMount() {
    }

    handleChangeOnInput = (event, id) => {
        //console.log(event.target.value, id);

        let coppyState = { ...this.state }; // Tại sao khúc này lại làm rườm rà như vậy, thì việc gọi qua 1 thằng trung gian sẽ dễ ít bị lỗi hơn
        coppyState[id] = event.target.value;
        this.setState({
            ...coppyState
        })
    }

    checkValidateInput = () => {
        let isVali = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];

        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isVali = false;
                alert('Missing parameter: ' + arrInput[i])
                break;
            }
        }

        return isVali;
    }

    handleAddNewUser = () => {
        let isVali = this.checkValidateInput();

        if (isVali === true) {
            this.props.createNewUser(this.state); // Truyền qua thằng cha xử lý và cũng đồng thời sử dụng luôn
        }

    }

    render() {
        // console.log('>> Check child props', this.props);
        // console.log('>> Check child open modal user', this.props.isOpen); // isOpen Là tham số truyền vào bên UserManage

        return (
            <>
                <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className} centered='true'>
                    <ModalHeader toggle={this.props.toggle}>Add new user</ModalHeader>
                    <ModalBody>
                        <div className='container-user'>
                            <div className='email'>
                                <label>Email</label>
                                <input type='email' placeholder='Email' onChange={(e) => this.handleChangeOnInput(e, 'email')} value={this.state.email} />
                            </div>
                            <div className='password'>
                                <label>Password</label>
                                <input type='password' placeholder='Password' onChange={(e) => this.handleChangeOnInput(e, 'password')} value={this.state.password} />
                            </div>
                            <div className='first-name'>
                                <label>First name</label>
                                <input type='text' placeholder='First name' onChange={(e) => this.handleChangeOnInput(e, 'firstName')} value={this.state.firstName} />
                            </div>
                            <div className='last-name'>
                                <label>Last name</label>
                                <input type='text' placeholder='Last name' onChange={(e) => this.handleChangeOnInput(e, 'lastName')} value={this.state.lastName} />
                            </div>
                            <div className='address'>
                                <label>Address</label>
                                <input type='text' placeholder='Address' onChange={(e) => this.handleChangeOnInput(e, 'address')} value={this.state.address} />
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button type='button' className='add-user' onClick={this.handleAddNewUser}>
                            Add
                        </button>{' '}
                        <button type='button' className='close' onClick={this.props.toggle}>
                            Close
                        </button>
                    </ModalFooter>
                </Modal>
            </>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);



