module.exports = (url) => {
  const pathParts = url.split('/').filter((part) => part?.trim() !== '');
  return pathParts?.map((part, partIndex) => {
    const previousParts = pathParts.slice(0, partIndex);

    if (typeof String.prototype.replaceAll === "undefined") {
      String.prototype.replaceAll = function (match, replace) {
        return this.replace(new RegExp(match, 'g'), () => replace);
      }
    }

    return {
      label: part.replaceAll('-', ' '),
      href: previousParts?.length > 0 ? `/${previousParts?.join('/')}/${part}` : `/${part}`,
    };
  }) || [];
}