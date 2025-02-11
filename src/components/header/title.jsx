export function Title() {
  const page = window.page;

  if (page && page.data.document && page.viewName !== 'error') {
    return (
      <h1>
        <a href="#">
          {page.data.document.forceShowNamespace !== false && (
            <span className="namespace">{page.data.document.namespace}: </span>
          )}
          {page.data.document.title}
        </a>
        {page.viewName === 'edit_edit_request' && page.viewName === 'edit_request' && (
          <small>(편집요청)</small>
        )}
        {page.viewName === 'edit' && page.data.body.section && (
          <small>(r{page.data.body.baserev} 문단편집)</small>
        )}
        {page.viewName === 'edit' && page.data.body.baserev === '0' && (
          <small>(새 문서 생성)</small>
        )}
        {page.viewName === 'edit' && <small>(r{page.data.body.baserev} 편집)</small>}
        {page.viewName === 'history' && <small>(역사)</small>}
        {page.viewName === 'backlink' && <small>(역링크)</small>}
        {page.viewName === 'move' && <small>(이동)</small>}
        {page.viewName === 'delete' && <small>(삭제)</small>}
        {page.viewName === 'acl' && <small>(ACL)</small>}
        {page.viewName === 'thread' && <small>(토론)</small>}
        {page.viewName === 'thread_list' && <small>(토론 목록)</small>}
        {page.viewName === 'thread_list_close' && <small>(닫힌 토론)</small>}
        {page.viewName === 'thread_request_list' && <small>(닫힌 편집 요청)</small>}
        {page.viewName === 'diff' && <small>(비교)</small>}
        {page.viewName === 'revert' && page.data.rev && (
          <small>(r{page.data.rev}로 되돌리기)</small>
        )}
        {page.viewName === 'raw' && page.data.rev && (
          <small>(r{page.data.rev} RAW)</small>
        )}
        {page.viewName === 'blame' && page.data.rev && (
          <small>(r{page.data.rev} Blame)</small>
        )}
        {page.viewName === 'wiki' && page.data.rev && (
          <small>(r{page.data.rev} 판)</small>
        )}
      </h1>
    );
  }
  return <h1>{page.title}</h1>;
};