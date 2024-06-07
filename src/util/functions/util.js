import {format} from "date-fns";

function formatDate(timestamp) {
    const date = timestamp.toDate(); // Convert to JavaScript Date object
    return format(date, 'PPP'); 
  }

export {formatDate};

