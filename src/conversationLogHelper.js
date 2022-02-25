import messageTypes from '@ringcentral-integration/commons/enums/messageTypes';

export function isDisableLog(conversation) {
  const isVoicemail = conversation.type === messageTypes.voiceMail;
  const isFax = conversation.type === messageTypes.fax;
  return (
    (conversation.type === messageTypes.pager &&
      Array.isArray(conversation.correspondents) &&
      conversation.correspondents.length > 1) ||
    isVoicemail ||
    isFax
  );
}

export function getCurrentDateTimeStamp() {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = `0${dd}`;
  }
  if (mm < 10) {
    mm = `0${mm}`;
  }
  today = `${mm}/${dd}/${yyyy}`;
  return new Date(today).getTime();
}

export function isDisabledLog(conversation) {
  if (!conversation) return true;
  const isVoicemail = conversation.type === messageTypes.voiceMail;
  const isFax = conversation.type === messageTypes.fax;
  const isPager = conversation.type === messageTypes.pager;
  return isPager || isVoicemail || isFax;
}
