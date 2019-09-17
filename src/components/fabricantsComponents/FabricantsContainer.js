import React, { Component } from "react";
import fabricantsList from "./FabricantsList";
import FabricantsHeader from "./FabricantsHeader";
import FabricantComp from "./FabricantComp";
import UsersComp from "./UsersComp";

//import FakeCommandes from "./FakeCommandes";
import sayara from "./../../images/sayara.png";
import WarningDialog from "./WarningDialog";
import axiosdef from "./../loginComponents/axiosDef";
import AddDialog from "./AddDialog";

class FabricantsContainer extends Component {
  constructor() {
    super();
    this.state = {
      fabricantsList: [],
      openWarningDialog: false,
      openModifierDialog: false,
      openAddDialog: false,
      modifierObject: {},
      deleteObject: {},
      loading: true
    };
  }

  componentDidMount() {
    axiosdef
      .get(`/account/fabriquant/utlisateur/${localStorage.getItem("marque")}`)
      .then(res => res.data)
      .then(res => {
        console.log(res);
        this.setState({
          fabricantsList: res,
          loading: false
        });
      });
  }

  handleOpenDeleteUser = obj => {
    this.setState({ openWarningDialog: true, deleteObject: obj });
  };

  handleOpenModifUser = obj => {
    this.setState({ openModifierDialog: true, modifierObject: obj });
  };

  handleOpenAddUser = () => {
    this.setState({ openAddDialog: true });
  };

  handleCloseAddUser = () => {
    this.setState({ openAddDialog: false });
  };

  handleCloseDeleteUser = () => {
    this.setState({ openWarningDialog: false });
  };

  handleCloseModifUser = () => {
    this.setState({ openModifierDialog: false });
  };

  handleDeleteUser = obj => {
    axiosdef
      .delete(`/account/fabriquant/utilisateur/${obj.email}`)
      .then(res => {
        this.handleCloseDeleteUser();
        if (res.status === 204) return Promise.resolve(res);
        else return Promise.reject(res);
      })
      .then(resp => {
        let { history } = this.props;
        history.replace("/admin/fabricants");
      })
      .catch(err => {
        console.log("error while tring to delete the user");
        alert("try again");
      });
    console.log(obj, "delete");
  };

  handleModifUser = obj => {
    let object = {
      nom: obj.nom,
      prenom: obj.prenom,
      tel: obj.tel,
      blocker: obj.blocker,
      adresse: obj.adresse
    };
    if (obj.password !== "") object.password = obj.password;
    axiosdef
      .patch(`/account/fabriquant/utilisateur/${obj.email}`, object)
      .then(res => {
        this.handleCloseModifUser();
        console.log(res);
        if (res.status === 200) return Promise.resolve(res);
        else return Promise.reject(res);
      })
      .then(resp => {
        let { history } = this.props;
        history.replace("/admin/fabricants");
      })
      .catch(err => {
        console.log("error while tring to update the user");
        alert("try again");
      });
    console.log(obj, "update");
  };

  handleAddUser = obj => {
    let object = {
      nom: obj.nom,
      prenom: obj.prenom,
      tel: obj.tel,
      is_active: obj.blocker,
      adresse: obj.adresse,
      email: obj.email,
      password: obj.password,
      marque: localStorage.getItem("marque")
    };

    axiosdef
      .post(`/account/fabriquant/utilisateur`, object)
      .then(res => {
        this.handleCloseAddUser();
        console.log(res);
        if (res.status === 201) return Promise.resolve(res);
        else return Promise.reject(res);
      })
      .then(resp => {
        let { history } = this.props;
        history.replace("/admin/fabricants");
      })
      .catch(err => {
        console.log("error while tring to Add the user");
        alert("try again");
      });
    console.log(obj, "add");
  };

  render() {
    let users = this.state.fabricantsList.map(user => (
      <UsersComp key={user.email} user={user} />
    ));
    let content = this.state.loading ? (
      <div className="loaderContainer">
        <img className="spinnerLoader" src={sayara} alt="logo spinner" />
      </div>
    ) : this.state.fabricantsList.length !== 0 ? (
      <div className="uploadTextDragContainer">
        {users}
        {/* <FabricantComp handleOpenDeleteMarque={this.handleOpenDeleteMarque} />
        <FabricantComp handleOpenDeleteMarque={this.handleOpenDeleteMarque} />
        <FabricantComp handleOpenDeleteMarque={this.handleOpenDeleteMarque} />
        <FabricantComp handleOpenDeleteMarque={this.handleOpenDeleteMarque} />
        <FabricantComp handleOpenDeleteMarque={this.handleOpenDeleteMarque} /> */}
        {/* <WarningDialog
          open={this.state.openWarningDialog}
          handleClose={this.handleCloseDeleteMarque}
          handleDelete={this.handleDeleteMarque}
          obj={this.state.deleteObject}
        /> */}
      </div>
    ) : (
      <div className="emptyCommandes">List vide</div>
    );
    return (
      <div className="managIndex">
        <FabricantsHeader
          handleButton={this.handleOpenAddUser}
          number={this.state.fabricantsList.length}
        />
        {content}
        <AddDialog
          open={this.state.openAddDialog}
          handleClose={this.handleCloseAddUser}
          handleAdd={this.handleAddUser}
        />
      </div>
    );
  }
}

export default FabricantsContainer;
