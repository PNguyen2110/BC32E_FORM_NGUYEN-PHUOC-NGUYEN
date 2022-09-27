import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteUser, editUser, searchUser } from "../Action/Action";
class ThongTin extends Component {
  state = {
    findUser: "",
  };
  render() {
    return (
      <div className="mt-10">
        <div className="mb-8 text-left flex">
          <input
            onChange={(e) => {
              this.setState({ findUser: e.target.value });
            }}
            className="pl-3 h-10 w-[600px] border-2 border-blue-600 rounded"
            type="text"
            placeholder="Tìm kiếm theo mã sinh viên"
          />
          <button
            className="bg-blue-500 w-[100px] ml-1 rounded-md text-white"
            onClick={() => this.props.dispatch(searchUser(this.state.findUser))}
          >
            Search
          </button>
        </div>
        <table className="w-full">
          <thead className="bg-black text-white h-11">
            <tr>
              <th>Mã SV</th>
              <th>Họ tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.mangSv.map((item, index) => {
              return (
                <tr key={index} className="bg-blue-300 h-[50px]">
                  <td>{item.maSv}</td>
                  <td>{item.fullName}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td className="text-white">
                    <button
                      onClick={() => this.props.dispatch(editUser(item.id))}
                      className="bg-blue-600 mx-5 h-8 w-20 rounded-md"
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-600 mx-5 h-8 w-20 rounded-md"
                      onClick={() => {
                        this.props.dispatch(deleteUser(item.id));
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // mangSv: state.BTFormReducer.mangSv,
    ...state.BTFormReducer,
  };
};

export default connect(mapStateToProps)(ThongTin);
