import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { toggleModal, changeFilterView } from "../../store/action"
import { size } from "../../index.styles"
import { Hamburger } from "../header/header"
import Navbar, { FILTER_VIEW } from "../navbar/navbar"

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(54, 54, 82);
  z-index: 1500;
  height: 100%;
  padding: 1rem;
  width: 100vw;
  display: none;

  @media (max-width: ${size.tablet}) {
    display: ${props => (props.showinmob ? "inherit" : "none")};
  }
`

const ModalHamburger = styled(Hamburger)`
  float: right;
  color: rgb(240, 235, 255) !important;
`
const FilterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem 0rem;
`

const FilterText = styled.h3`
  padding-right: 1rem;
  cursor: pointer;
  color:  rgb(240, 235, 255);
  @media (max-width: ${size.tablet}) {
    font-size: 1rem;


  }

`
const Modal = props => {
  const changeFilterViewTo = filter_view => {
    props.changeFilterView(filter_view)
  }

  const closeModal = () => {
    props.toggleModal();
    props.changeFilterView(FILTER_VIEW.ALL);
  }
  return (
    <ModalWrapper showinmob={props.showModal}>
      <ModalHamburger
        toggleButton={closeModal}
        showInMobile={true}
        isActive={props.showModal}
        barColor="rgb(240, 235, 255)"
        buttonWidth={30}
      />
      <FilterWrapper>
            <FilterText onClick={() => changeFilterViewTo(FILTER_VIEW.ALL)}> akinsola</FilterText>
          <FilterText onClick={() => changeFilterViewTo(FILTER_VIEW.PROJECTS)}> art</FilterText>
          <FilterText onClick={() => changeFilterViewTo(FILTER_VIEW.WEB)}> web</FilterText>
      </FilterWrapper>
      <Navbar showInMobile={true} />
    </ModalWrapper>
  )
}

const mapStateToProps = state => {
  return {
    showModal: state.showModal,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => dispatch(toggleModal()),
    changeFilterView: filter_view => dispatch(changeFilterView(filter_view)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal)
