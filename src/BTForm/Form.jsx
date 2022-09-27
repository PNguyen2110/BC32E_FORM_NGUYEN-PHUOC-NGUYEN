import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser, updateUser } from "../Action/Action";

class Form extends Component {
  state = {
    values: {
      maSv: "",
      fullName: "",
      phone: "",
      email: "",
    },

    errors: {
      maSv: "",
      fullName: "",
      phone: "",
      email: "",
    },
  };
  handleChange = (event) => {
    console.log(111);
    const { name, value } = event.target;
    this.setState({
      values: {
        ...this.state.values,
        [name]: value,
      },
      // ...this.state.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.checkValidity());
    if (event.target.checkValidity()) {
      if (this.props.selectedUser) {
        this.props.dispatch(updateUser(this.state.values));
      } else {
        this.props.dispatch(addUser(this.state.values));
      }

      this.setState({
        values: {
          maSv: "",
          fullName: "",
          phone: "",
          email: "",
        },
      });
    }
    // }
  };
  handleBlur = (event) => {
    console.log(123);
    const { name, title, minLength, maxLength, validity } = event.target;
    const {
      validationMessage,
      validity: { valueMissing, tooShort, patternMismatch },
    } = event.target;
    // console.log(validity);
    let mess = "";
    if (valueMissing) {
      mess = `${title} không được bỏ trống`;
    }
    if (tooShort) {
      mess = `${title} phải từ ${minLength} đến ${maxLength}`;
    }
    if (patternMismatch) {
      mess = `${title} không đúng định dạng`;
    }

    this.setState({
      errors: {
        ...this.state.errors,
        // [name]: validationMessage,
        [name]: mess,
      },
    });
  };

  static getDerivedStateFromProps(nextProps, currentState) {
    if (
      nextProps.selectedUser &&
      nextProps.selectedUser.id !== currentState.values.id
    ) {
      currentState.values = nextProps.selectedUser;
    }

    return currentState;
  }

  render() {
    // const { selectedUser } = this.props;
    const { maSv, fullName, phone, email } = this.state.values;
    return (
      <div>
        <form id="form" onSubmit={this.handleSubmit} noValidate>
          <h2 className="text-white text-left bg-black text-[30px]  ">
            THÔNG TIN SINH VIÊN
          </h2>
          <div className="grid grid-cols-2 gap-10 mt-10 text-left">
            <div>
              <p className="text-xl">Mã SV</p>
              <input
                value={maSv}
                title=" Mã sv"
                minLength={4}
                maxLength={10}
                onBlur={this.handleBlur}
                required
                onChange={this.handleChange}
                name="maSv"
                className="rounded w-full p-2 border-2 border-black"
                type="text"
              />
              <span className="text-red-500">{this.state.errors.maSv}</span>
            </div>
            <div>
              <p className="text-xl">Họ Tên</p>
              <input
                value={fullName}
                minLength={4}
                maxLength={10}
                title="Họ tên"
                onBlur={this.handleBlur}
                required
                onChange={this.handleChange}
                name="fullName"
                className="rounded w-full p-2 border-2 border-black"
                type="text"
              />
              <span className="text-red-500">{this.state.errors.fullName}</span>
            </div>
            <div>
              <p className="text-xl">Số điện thoại</p>
              <input
                value={phone}
                minLength={4}
                maxLength={10}
                title="phone"
                onBlur={this.handleBlur}
                required
                onChange={this.handleChange}
                name="phone"
                className="rounded w-full p-2 border-2 border-black"
                type="number"
              />
              <span className="text-red-500">{this.state.errors.phone}</span>
            </div>
            <div>
              <p className="text-xl">Email</p>
              <input
                value={email}
                pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                title="email"
                onBlur={this.handleBlur}
                required
                onChange={this.handleChange}
                name="email"
                className="rounded w-full p-2 border-2 border-black"
                type="text"
              />
              <span className="text-red-500">{this.state.errors.email}</span>
            </div>
            <div>
              <button
                type="submit"
                className={`bg-green-600 w-[140px] h-10 rounded text-white
                ${this.props.selectedUser ? "hidden" : ""}
                `}
                // onClick={this.handleSubmit}
              >
                Thêm sinh viên
              </button>
              <button
                type="submit"
                className={`${
                  this.props.selectedUser ?? "hidden"
                } ml-5 bg-blue-600 w-[140px] h-10 rounded text-white`}
                // onClick={() => this.props.dispatch(updateUser())}
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // mangSv: state.BTFormReducer.mangSv,
    // selectedUser: state.BTFormReducer.selectedUser,
    ...state.BTFormReducer,
  };
};
export default connect(mapStateToProps)(Form);
