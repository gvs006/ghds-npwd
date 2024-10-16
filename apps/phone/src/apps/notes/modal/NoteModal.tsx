import { Box, Slide, Paper, Typography, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useStyles from './modal.styles';
import { useTranslation } from 'react-i18next';
import { useModalVisible, useSelectedNote } from '../hooks/state';
import { useHistory, useLocation } from 'react-router-dom';
import { useNotesAPI } from '../hooks/useNotesAPI';
import { useTheme } from '@mui/material';
import { RiDeleteBin2Line } from "@react-icons/all-files/ri/RiDeleteBin2Line";

export const NoteModal: React.FC = () => {
  const classes = useStyles();
  const { addNewNote, deleteNote, updateNote } = useNotesAPI();
  const [modalVisible, setModalVisible] = useModalVisible();
  const [t] = useTranslation();
  const [selectedNote, setSelectedNote] = useSelectedNote();
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const phoneTheme = useTheme();

  const history = useHistory();
  const location = useLocation();

  const isNewNote = !Boolean(selectedNote?.id);

  useEffect(() => {
    if (selectedNote !== null) {
      setNoteContent(selectedNote.content);
      setNoteTitle(selectedNote.title);
    }
  }, [selectedNote]);

  const handleDeleteNote = () => {
    deleteNote({ id: selectedNote.id })
      .then(() => {
        setModalVisible(false);
      })
      .catch(console.error);
  };

  const handleUpdateNote = () => {
    updateNote({ id: selectedNote.id, title: noteTitle, content: noteContent })
      .then(() => {
        setModalVisible(false);
      })
      .catch(console.error);
  };

  const handleNewNote = () => {
    addNewNote({ title: noteTitle, content: noteContent })
      .then(() => {
        if (location.search) history.goBack();
        setModalVisible(false);
      })
      .catch(console.error);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoteTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoteContent(e.target.value);
  };

  const _handleClose = () => {
    setModalVisible(false);
  };

  const handleClearContent = () => {
    setSelectedNote(null);
    if (location.search) history.goBack();
  };

  if (selectedNote === null) return null;

  return (
    <Slide
      direction="left"
      in={modalVisible}
      mountOnEnter
      unmountOnExit
      onExited={handleClearContent}
    >
      <Paper className={classes.modalRoot} square elevation={0} sx={{ padding: '16px' }}>
        <Container>
          {/* Header com o botão de voltar e o botão de Concluído/Salvar */}
          <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
            <Box
              onClick={_handleClose}
              sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
              <ArrowBackIcon
                style={{ color: phoneTheme.palette.primary.main, marginRight: '8px' }}
              />
              <Typography variant="body1" color="primary">
                {t('APPS_NOTES')}
              </Typography>
            </Box>
            <Box
              onClick={isNewNote ? handleNewNote : handleUpdateNote}
              sx={{
                cursor: noteTitle.length === 0 ? 'default' : 'pointer',
                color: phoneTheme.palette.primary.main,
                fontWeight: 'lighter',
                fontSize: '16px',
                opacity: noteTitle.length === 0 ? 0.5 : 1,
              }}
            >
              {isNewNote ? t('GENERIC_SAVE') : t('GENERIC_DONE')}
            </Box>
          </Box>
          {/* Campos de título e conteúdo da nota */}
          <Box mb={2}>
            <input
              className={classes.input}
              placeholder="Título"
              maxLength={25}
              value={noteTitle}
              onChange={handleTitleChange}
              style={{
                width: '100%',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                border: 'none',
                outline: 'none',
                marginBottom: '8px',
              }}
            />
            <textarea
              className={classes.input}
              placeholder="Conteúdo"
              maxLength={250}
              rows={10}
              value={noteContent}
              onChange={handleContentChange}
              style={{
                width: '100%',
                fontSize: '1rem',
                border: 'none',
                outline: 'none',
                resize: 'none',
                lineHeight: '1.5',
              }}
            />
            <Typography align="right" variant="body2" color="text.disabled">
              {noteContent.length}/250
            </Typography>
          </Box>
          {/* Ícone de lixeira na parte inferior */}
          {!isNewNote && (
            <Box
            className={`${classes.absolute} ${classes.fabButton}`}
              onClick={handleDeleteNote}
              sx={{
                cursor: 'pointer',
                color: phoneTheme.palette.error.main,
                fontWeight: 'lighter',
                fontSize: '24px',
                display: 'flex',
                alignItems: 'left',
                justifyContent: 'left',
                mt: 4,
              }}
            >
              <RiDeleteBin2Line />
            </Box>
          )}
        </Container>
      </Paper>
    </Slide>
  );
};
