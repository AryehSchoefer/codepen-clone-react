import React, { useState } from 'react'
import 'codemirror/theme/material.css'
import 'codemirror/lib/codemirror.css'
// syntax-highlighting:
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
// import text-editor:
import { Controlled as ControlledEditor } from 'react-codemirror2'
// fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'

export default function Editor(props) {
	const { language, displayName, value, onChange } = props

	const [open, setOpen] = useState(true)

	const handleChange = (editor, data, value) => {
		onChange(value)
	}

	return (
		<div className={`editor-container ${open ? '' : 'collapsed'}`}>
			<div className="editor-title">
				{displayName}
				<button type="button" className="expand-collapse-btn" onClick={() => setOpen((prevOpen) => !prevOpen)}>
					<FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
				</button>
			</div>
			<ControlledEditor
				className="code-mirror-wrapper"
				onBeforeChange={handleChange}
				value={value}
				options={{
					lineWrapping: true,
					lint: true,
					mode: language,
					theme: 'material',
					lineNumbers: true,
				}}
			/>
		</div>
	)
}
