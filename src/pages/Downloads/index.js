import Downloads from './Downloads';
import { connect } from 'react-redux';
import { selectAllItems } from '../../store/selectors';
import { fetchDownloads, } from '../../store/downloadItemsSlice';

const mapStateToProps = (state) => ({
  items: selectAllItems(state),
});

const mapDispatchToProps = {
  fetchDownloads,
};

export default connect(mapStateToProps, mapDispatchToProps)(Downloads);
