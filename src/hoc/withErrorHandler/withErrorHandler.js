import React from "react";

import Modal from "react-bootstrap/Modal";

const errrorHandler = (WrappedComponent, axios) => {
    return class extends React.Component {
        state = { error: null };

        reqInterceptor = axios.interceptors.request.use(req => {
            this.setState({ error: null });
            return req;
        });

        resInterceptor = axios.interceptors.response.use(
            res => res,
            error => this.setState({ error })
        );

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        handleCloseModal = () => this.setState({ error: null });

        render() {
            return (
                <React.Fragment>
                    <Modal show={!!this.state.error} onHide={this.handleCloseModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Error Message</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>{this.state.error ? this.state.error.message : null}</p>
                        </Modal.Body>
                    </Modal>
                    <WrappedComponent {...this.props} />
                </React.Fragment>
            )
        }
    };
};

export default errrorHandler;