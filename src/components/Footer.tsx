
function Footer() {
    return (
        <footer style={styles.footer}>
            <p>© 2026 Henrison Okechukwu | All Rights Reserved</p>

            <p>Email: henrisonok@outlook.com</p>
        </footer>
    );
}

const styles = {
    footer: {
        background: "#222",
        color: "white",
        textAlign: "center" as const,
        padding: "20px",
    },
};

export default Footer;