import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import VanillaModal from '../components/VanillaModal/VanillaModal';
import * as packCreatorActions from '../actions/packCreator';
import * as downloadManagerActions from '../actions/downloadManager';

function mapStateToProps(state) {
  return {
    versionsManifest: state.packCreator.versionsManifest,
    modalState: state.packCreator.modalState,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...packCreatorActions, ...downloadManagerActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VanillaModal);
