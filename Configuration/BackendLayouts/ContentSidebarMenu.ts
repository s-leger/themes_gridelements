backendlayouts {
    ContentSidebarMenu {
        icon = EXT:themes_gridelements/Resources/Public/BackendLayoutIcons/ContentSidebarMenu.jpg
        name = ContentSidebarMenu
        backend_layout (
		    colCount = 5
		    rowCount = 3
		    rows {
		        1 {
		            columns {
		                1 {
		                    name = Feature
		                    colspan = 5
		                    colPos = 3
		                }
		            }
		        }
		        2 {
		            columns {
		                1 {
		                    name = Content
		                    colspan = 3
		                    colPos = 0
		                }
		                2 {
		                    name = Sidebar
		                    colPos = 2
		                }
		                3 {
		                    name = Menu
		                    colPos = 1
		                }
		            }
		        }
		        3 {
		            columns {
		                1 {
		                    name = Extended
		                    colspan = 5
		                    colPos = 4
		                }
		            }
		        }
		    }
        )
    }
}