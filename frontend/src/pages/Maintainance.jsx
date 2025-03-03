import React from 'react'

const Maintainance = () => {
  return (
    <div style={styles.container}>
      <div style={styles.messageContainer}>
        <h1 style={styles.title}>We'll Be Back Soon!</h1>
        <p style={styles.message}>Our site is currently under maintenance. Please check back later.</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    //height: '100vh',
    //width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#f8f8f8',
    textAlign: 'center',
  },
  messageContainer: {
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
  },
  message: {
    fontSize: '1rem',
    color: '#555',
  },
};


export default Maintainance