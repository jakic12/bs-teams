class Modal extends React.Component {
    render() {
      return ReactDOM.createPortal(
        <div
          style={{
            position: 'absolute',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}
          onClick={this.props.onClose}
        >
          <div
            style={{
              padding: 20,
              background: '#fff',
              borderRadius: '2px',
              display: 'inline-block',
              minHeight: '300px',
              margin: '1rem',
              position: 'relative',
              minWidth: '300px',
              boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
              justifySelf: 'center',
            }}
          >
            {this.props.children}
            <hr />
            <button onClick={this.props.onClose}>Close</button>
          </div>
        </div>,
        modalRoot,
      )
    }
  }