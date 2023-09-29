import { Component } from 'react';
import { ErrorMessage } from '../error-message/error-message';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
    };
  }

  componentDidCatch(error, descr) {
    this.setState({ isError: true });

    console.error(error);
    console.error(descr);
  }

  render() {
    if (this.state.isError) return <ErrorMessage />;

    return this.props.children;
  }
}

export { ErrorBoundary };
