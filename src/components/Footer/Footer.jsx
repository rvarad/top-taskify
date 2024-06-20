import StyledFooter from "./Footer.styled"

function Footer() {
	return (
		<StyledFooter>
			<div className="footer">
				<span className="credits">
					Brought to you by :{" "}
					<a
						href="https://github.com/rvarad"
						target="_blank"
					>
						rvarad
					</a>{" "}
					|{" "}
					<a
						href="https://github.com/rvarad/top-taskify"
						target="_blank"
					>
						Source
					</a>
				</span>
			</div>
		</StyledFooter>
	)
}

export default Footer
