// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

tabs = {};
tabIds = [];

focusedWindowId = undefined;
currentWindowId = undefined;

function bootStrap() {
		
	console.log('done');
	/*
  chrome.windows.getCurrent(function(currentWindow) {
    currentWindowId = currentWindow.id;
    chrome.windows.getLastFocused(function(focusedWindow) {
      focusedWindowId = focusedWindow.id;
      loadWindowList();
    });
  });*/
	
}

chrome.tabs.onCreated.addListener(function(tab) {
	console.log('tabs.onCreated --'
	              + ' window: ' + tab.windowId
	              + ' tab: '    + tab.id
	              + ' index: '  + tab.index
	              + ' url: '    + tab.url);
});



chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	console.log('tabs.onUpdated --'
	              + ' window: ' + tab.windowId
	              + ' tab: '    + tab.id
	              + ' index: '  + tab.index
	              + ' url: '    + tab.url
	              + ' status: ' + changeInfo.status);
	
});

chrome.commands.onCommand.addListener(function(command) {
	  console.log('Command:', command);
	});




document.addEventListener('DOMContentLoaded', function() {
  bootStrap();
});

