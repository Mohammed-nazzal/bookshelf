import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React , { useCallback }  from 'react';
import Underline from "@tiptap/extension-underline";
import Text from '@tiptap/extension-text';
import Document from '@tiptap/extension-document';
import Heading from '@tiptap/extension-heading';
import Paragraph from '@tiptap/extension-paragraph';
import TextAlign from '@tiptap/extension-text-align';
import Dropcursor from '@tiptap/extension-dropcursor'
import Image from '@tiptap/extension-image'
import {FaBold ,FaItalic,FaStrikethrough,FaCode,FaHeading,FaListOl,
FaListUl,FaQuoteLeft,FaRedo,FaUndo,FaUnderline} from 'react-icons/fa'
import './Tiptap.css'
const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }


  

  return (
    <div className = "menu-bar">
      <div>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        <FaBold/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        <FaItalic/>
      </button>

      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive('underline') ? 'is-active' : ''}
      >
        <FaUnderline/>
        
      </button>


      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        <FaStrikethrough/>
        
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={editor.isActive('code') ? 'is-active' : ''}
      >
        <FaCode/>
      </button>
      
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >

        <FaHeading/>
      </button>


      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        <FaListUl/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        <FaListOl/>
       
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
      >
        code block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        <FaQuoteLeft/>
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
      >
        left
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
      >
        center
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
      >
        right
      </button>


      
    </div>

    

    <div>
      <button onClick={() => editor.chain().focus().undo().run()}>
        <FaUndo/>
      </button>
      <button onClick={() => editor.chain().focus().redo().run()}>
        <FaRedo/>
      </button>

      </div>
    </div>
  )
}

export default ({setComment}) => {
  const editor = useEditor({
    extensions: [
      StarterKit, Underline ,Document,
      Paragraph,
      Text,
      Heading,
      Image, 
      Dropcursor,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: ``,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setComment(html)
    }
    
  })


  return (
   
    <div className="text-editor">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}