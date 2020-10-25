export const generateNextChapterLink = (currentChapter) => {
  return `/chapter${currentChapter + 1}`;
}

export const generatePreviousChapterLink = (currentChapter) => {
  if(currentChapter - 1 >= 0) {
    return `/chapter${currentChapter - 1}`
  } else {
    return '/';
  }
}