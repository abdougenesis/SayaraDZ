import React, { Component } from "react";
import fabricantsList from "./FabricantsList";
import FabricantsHeader from "./FabricantsHeader";
import FabricantComp from "./FabricantComp";
import UsersComp from "./UsersComp";

//import FakeCommandes from "./FakeCommandes";
import sayara from "./../../images/sayara.png";
import WarningDialog from "./WarningDialog";
import axiosdef from "./../loginComponents/axiosDef";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import userPic from "./../../images/utilisateur.jpg";
import Paper from "@material-ui/core/Paper";
import ModifierUser from "./ModifierUser";

const style = {
  card: {
    width: 220
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },

  textSelected: {
    textAlign: "center",
    fontFamily: "Dosis",
    fontSize: 17,
    fontWeight: 600,
    textTransform: "capitalize",
    color: "#344750"
  },
  elemText: {
    fontFamily: "Dosis",
    fontSize: 17,
    fontWeight: 550,
    textTransform: "capitalize",
    color: "#344750"
  },

  paperName: {
    padding: 15,
    marginBottom: 18
  },
  userButton: {
    width: 120,
    margin: 20
  }
};

class UserContainer extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      openWarningDialog: false,
      openModifierDialog: false,
      modifierObject: {},
      deleteObject: {}
    };
  }

  async componentDidMount() {
    console.log(this.props.location.state);
    this.setState({ loading: false, user: this.props.location.state });
  }

  handleOpenDeleteUser = obj => {
    this.setState({ openWarningDialog: true, deleteObject: obj });
  };

  handleOpenModifUser = obj => {
    this.setState({ openModifierDialog: true, modifierObject: obj });
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

  render() {
    let { classes } = this.props;
    let content = this.state.loading ? (
      <div className="loaderContainer">
        <img className="spinnerLoader" src={sayara} alt="logo spinner" />
      </div>
    ) : (
      <div>
        <div className="uploadTextDragContainer">
          <div className="userPic">
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={userPic}
                  title="user pic"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h6"
                    className={classes.textSelected}
                  >
                    {this.state.user.nom}/{this.state.user.prenom}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className="userFirstInfo">
            <Paper className={classes.paperName}>
              <Typography
                variant="p"
                display="inline"
                component="p"
                className={classes.elemText}
              >
                Name
              </Typography>
              <Typography
                variant="p"
                display="inline"
                component="p"
                className="userInfoContent"
              >
                {this.state.user.nom}
              </Typography>
            </Paper>
            <Paper className={classes.paperName}>
              <Typography
                variant="p"
                display="inline"
                component="p"
                className={classes.elemText}
              >
                prenom
              </Typography>
              <Typography
                variant="p"
                display="inline"
                component="p"
                className="userInfoContent"
              >
                {this.state.user.prenom}
              </Typography>
            </Paper>
            <Paper className={classes.paperName}>
              <Typography
                variant="p"
                display="inline"
                component="p"
                className={classes.elemText}
              >
                telephone
              </Typography>
              <Typography
                variant="p"
                display="inline"
                component="p"
                className="userInfoContent"
              >
                {this.state.user.tel}
              </Typography>
            </Paper>
          </div>
        </div>
        <div className="userpasswordEmail">
          <Paper className="paperMdpEmail">
            <Typography
              variant="p"
              display="inline"
              component="p"
              className={classes.elemText}
            >
              Password
            </Typography>
            <Typography
              variant="p"
              display="inline"
              component="p"
              className="userInfoContent"
            >
              *********
            </Typography>
          </Paper>
          <Paper className="paperMdpEmail">
            <Typography
              variant="p"
              display="inline"
              component="p"
              className={classes.elemText}
            >
              E-mail
            </Typography>
            <Typography
              variant="p"
              display="inline"
              component="p"
              className="userInfoContent"
            >
              {this.state.user.email}
            </Typography>
          </Paper>
        </div>
        <div className="userpasswordEmail">
          <Paper className="paperMdpEmail">
            <Typography
              variant="p"
              display="inline"
              component="p"
              className={classes.elemText}
            >
              Adresse
            </Typography>
            <Typography
              variant="p"
              display="inline"
              component="p"
              className="userInfoContent"
            >
              {this.state.user.adresse}
            </Typography>
          </Paper>
          <Paper className="paperMdpEmail">
            <Typography
              variant="p"
              display="inline"
              component="p"
              className={classes.elemText}
            >
              status blocker
            </Typography>
            <Typography
              variant="p"
              display="inline"
              component="p"
              className="userInfoContent"
            >
              {this.state.user.is_active ? "non" : "oui"}
            </Typography>
          </Paper>
        </div>
      </div>
    );
    return (
      <div className="managIndex">
        <FabricantsHeader number={6} />
        {content}
        <div className="userActionsButtons">
          <Button
            variant="contained"
            color="secondary"
            classes={{ root: classes.userButton }}
            onClick={() => this.handleOpenDeleteUser(this.state.user)}
          >
            Supprimer
          </Button>
          <Button
            variant="contained"
            color="primary"
            classes={{ root: classes.userButton }}
            onClick={() => this.handleOpenModifUser(this.state.user)}
          >
            Modifier
          </Button>
        </div>
        <WarningDialog
          obj={this.state.deleteObject}
          open={this.state.openWarningDialog}
          handleClose={this.handleCloseDeleteUser}
          handleDelete={this.handleDeleteUser}
        />
        <ModifierUser
          obj={this.state.modifierObject}
          open={this.state.openModifierDialog}
          handleClose={this.handleCloseModifUser}
          handleModif={this.handleModifUser}
        />
      </div>
    );
  }
}

export default withRouter(withStyles(style)(UserContainer));
